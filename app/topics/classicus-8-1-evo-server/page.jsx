import Classicus81EvoServerKeywordPage, { generateMetadata } from './classicus-8-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81EvoServerKeywordPage />;
}
