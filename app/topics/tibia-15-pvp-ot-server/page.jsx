import Tibia15PvpOtServerKeywordPage, { generateMetadata } from './tibia-15-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpOtServerKeywordPage />;
}
