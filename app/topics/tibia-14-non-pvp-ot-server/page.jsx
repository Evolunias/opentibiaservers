import Tibia14NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-14-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpOtServerKeywordPage />;
}
