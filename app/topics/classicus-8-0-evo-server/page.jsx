import Classicus80EvoServerKeywordPage, { generateMetadata } from './classicus-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80EvoServerKeywordPage />;
}
