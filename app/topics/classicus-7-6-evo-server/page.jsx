import Classicus76EvoServerKeywordPage, { generateMetadata } from './classicus-7-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus76EvoServerKeywordPage />;
}
