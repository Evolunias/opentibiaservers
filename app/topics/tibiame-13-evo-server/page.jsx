import Tibiame13EvoServerKeywordPage, { generateMetadata } from './tibiame-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame13EvoServerKeywordPage />;
}
