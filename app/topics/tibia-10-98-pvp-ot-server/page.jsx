import Tibia1098PvpOtServerKeywordPage, { generateMetadata } from './tibia-10-98-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpOtServerKeywordPage />;
}
