import Classicus13EvoServerKeywordPage, { generateMetadata } from './classicus-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13EvoServerKeywordPage />;
}
