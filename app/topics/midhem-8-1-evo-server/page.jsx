import Midhem81EvoServerKeywordPage, { generateMetadata } from './midhem-8-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem81EvoServerKeywordPage />;
}
