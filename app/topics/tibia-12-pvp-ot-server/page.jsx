import Tibia12PvpOtServerKeywordPage, { generateMetadata } from './tibia-12-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpOtServerKeywordPage />;
}
