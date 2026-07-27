import Tibia76NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpOtServerKeywordPage />;
}
