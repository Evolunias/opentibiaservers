import Realesta13EvoServerKeywordPage, { generateMetadata } from './realesta-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta13EvoServerKeywordPage />;
}
