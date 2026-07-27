import Ameria13EvoServerKeywordPage, { generateMetadata } from './ameria-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13EvoServerKeywordPage />;
}
