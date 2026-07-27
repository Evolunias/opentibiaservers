import Tibianus12PvpServerKeywordPage, { generateMetadata } from './tibianus-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus12PvpServerKeywordPage />;
}
