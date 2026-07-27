import Classicus84EvoServerKeywordPage, { generateMetadata } from './classicus-8-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus84EvoServerKeywordPage />;
}
