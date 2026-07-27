import Midhem80EvoServerKeywordPage, { generateMetadata } from './midhem-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80EvoServerKeywordPage />;
}
