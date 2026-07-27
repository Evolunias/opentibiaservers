import Tibia12NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-12-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpOtServerKeywordPage />;
}
