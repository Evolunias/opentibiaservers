import Tibia13PvpOtServerKeywordPage, { generateMetadata } from './tibia-13-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpOtServerKeywordPage />;
}
