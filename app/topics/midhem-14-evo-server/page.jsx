import Midhem14EvoServerKeywordPage, { generateMetadata } from './midhem-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14EvoServerKeywordPage />;
}
