import Midhem84EvoServerKeywordPage, { generateMetadata } from './midhem-8-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem84EvoServerKeywordPage />;
}
