import Tibia81NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpOtServerKeywordPage />;
}
