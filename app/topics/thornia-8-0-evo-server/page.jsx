import Thornia80EvoServerKeywordPage, { generateMetadata } from './thornia-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80EvoServerKeywordPage />;
}
