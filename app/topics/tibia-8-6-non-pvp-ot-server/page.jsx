import Tibia86NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpOtServerKeywordPage />;
}
