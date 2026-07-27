import Blazera12PvpServerKeywordPage, { generateMetadata } from './blazera-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera12PvpServerKeywordPage />;
}
