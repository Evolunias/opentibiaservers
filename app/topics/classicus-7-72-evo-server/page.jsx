import Classicus772EvoServerKeywordPage, { generateMetadata } from './classicus-7-72-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus772EvoServerKeywordPage />;
}
