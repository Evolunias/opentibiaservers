import Tibianus15PvpServerKeywordPage, { generateMetadata } from './tibianus-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus15PvpServerKeywordPage />;
}
