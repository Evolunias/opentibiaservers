import Classicus12EvoServerKeywordPage, { generateMetadata } from './classicus-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12EvoServerKeywordPage />;
}
