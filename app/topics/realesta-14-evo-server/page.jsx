import Realesta14EvoServerKeywordPage, { generateMetadata } from './realesta-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta14EvoServerKeywordPage />;
}
