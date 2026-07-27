import Classicus71EvoServerKeywordPage, { generateMetadata } from './classicus-7-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71EvoServerKeywordPage />;
}
