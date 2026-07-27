import Luminera12PvpServerKeywordPage, { generateMetadata } from './luminera-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12PvpServerKeywordPage />;
}
