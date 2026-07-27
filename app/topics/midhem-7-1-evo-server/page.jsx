import Midhem71EvoServerKeywordPage, { generateMetadata } from './midhem-7-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem71EvoServerKeywordPage />;
}
