import Tibia11NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-11-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpOtServerKeywordPage />;
}
