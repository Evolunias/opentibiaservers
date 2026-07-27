import Tibia100PvpOtServerKeywordPage, { generateMetadata } from './tibia-10-0-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpOtServerKeywordPage />;
}
