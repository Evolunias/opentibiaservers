import Midhem15EvoServerKeywordPage, { generateMetadata } from './midhem-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15EvoServerKeywordPage />;
}
