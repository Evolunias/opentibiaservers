import Tibia71PvpOtServerKeywordPage, { generateMetadata } from './tibia-7-1-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpOtServerKeywordPage />;
}
