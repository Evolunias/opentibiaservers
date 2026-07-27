import Tibianus14PvpServerKeywordPage, { generateMetadata } from './tibianus-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus14PvpServerKeywordPage />;
}
