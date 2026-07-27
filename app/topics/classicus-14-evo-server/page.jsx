import Classicus14EvoServerKeywordPage, { generateMetadata } from './classicus-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14EvoServerKeywordPage />;
}
