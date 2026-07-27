import Midhem11EvoServerKeywordPage, { generateMetadata } from './midhem-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11EvoServerKeywordPage />;
}
