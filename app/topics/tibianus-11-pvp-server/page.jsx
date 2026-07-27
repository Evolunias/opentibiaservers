import Tibianus11PvpServerKeywordPage, { generateMetadata } from './tibianus-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus11PvpServerKeywordPage />;
}
