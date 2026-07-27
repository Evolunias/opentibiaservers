import Medivia13EvoServerKeywordPage, { generateMetadata } from './medivia-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13EvoServerKeywordPage />;
}
