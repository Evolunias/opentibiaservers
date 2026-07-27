import Oldera86EvoServerKeywordPage, { generateMetadata } from './oldera-8-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera86EvoServerKeywordPage />;
}
