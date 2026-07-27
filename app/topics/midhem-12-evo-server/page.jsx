import Midhem12EvoServerKeywordPage, { generateMetadata } from './midhem-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12EvoServerKeywordPage />;
}
