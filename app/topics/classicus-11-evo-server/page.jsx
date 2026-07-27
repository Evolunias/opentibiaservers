import Classicus11EvoServerKeywordPage, { generateMetadata } from './classicus-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11EvoServerKeywordPage />;
}
