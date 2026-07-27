import Tibia15NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-15-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpOtServerKeywordPage />;
}
