import Classicus74EvoServerKeywordPage, { generateMetadata } from './classicus-7-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus74EvoServerKeywordPage />;
}
