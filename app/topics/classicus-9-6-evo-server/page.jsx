import Classicus96EvoServerKeywordPage, { generateMetadata } from './classicus-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96EvoServerKeywordPage />;
}
