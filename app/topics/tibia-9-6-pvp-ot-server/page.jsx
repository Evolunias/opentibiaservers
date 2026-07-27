import Tibia96PvpOtServerKeywordPage, { generateMetadata } from './tibia-9-6-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpOtServerKeywordPage />;
}
