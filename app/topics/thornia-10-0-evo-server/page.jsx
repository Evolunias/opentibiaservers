import Thornia100EvoServerKeywordPage, { generateMetadata } from './thornia-10-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia100EvoServerKeywordPage />;
}
