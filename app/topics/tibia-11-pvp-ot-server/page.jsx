import Tibia11PvpOtServerKeywordPage, { generateMetadata } from './tibia-11-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpOtServerKeywordPage />;
}
