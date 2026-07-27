import Thornia81EvoServerKeywordPage, { generateMetadata } from './thornia-8-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81EvoServerKeywordPage />;
}
