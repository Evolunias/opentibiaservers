import Oldera12EvoServerKeywordPage, { generateMetadata } from './oldera-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12EvoServerKeywordPage />;
}
