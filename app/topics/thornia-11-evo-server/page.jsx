import Thornia11EvoServerKeywordPage, { generateMetadata } from './thornia-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11EvoServerKeywordPage />;
}
