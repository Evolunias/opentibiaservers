import Tibianus13EvoServerKeywordPage, { generateMetadata } from './tibianus-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus13EvoServerKeywordPage />;
}
