import Tibia100NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpOtServerKeywordPage />;
}
