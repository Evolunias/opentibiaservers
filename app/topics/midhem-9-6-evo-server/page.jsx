import Midhem96EvoServerKeywordPage, { generateMetadata } from './midhem-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96EvoServerKeywordPage />;
}
