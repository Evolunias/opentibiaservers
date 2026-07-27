import Tibia84NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpOtServerKeywordPage />;
}
