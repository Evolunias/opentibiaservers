import Classicus1098EvoServerKeywordPage, { generateMetadata } from './classicus-10-98-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus1098EvoServerKeywordPage />;
}
