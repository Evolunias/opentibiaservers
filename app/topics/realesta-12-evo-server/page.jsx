import Realesta12EvoServerKeywordPage, { generateMetadata } from './realesta-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta12EvoServerKeywordPage />;
}
