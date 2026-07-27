import Oldera80EvoServerKeywordPage, { generateMetadata } from './oldera-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80EvoServerKeywordPage />;
}
