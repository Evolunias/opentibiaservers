import Tibia14PvpOtServerKeywordPage, { generateMetadata } from './tibia-14-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpOtServerKeywordPage />;
}
