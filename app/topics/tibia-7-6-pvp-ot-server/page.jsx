import Tibia76PvpOtServerKeywordPage, { generateMetadata } from './tibia-7-6-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpOtServerKeywordPage />;
}
