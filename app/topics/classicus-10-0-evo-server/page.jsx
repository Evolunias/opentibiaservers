import Classicus100EvoServerKeywordPage, { generateMetadata } from './classicus-10-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100EvoServerKeywordPage />;
}
