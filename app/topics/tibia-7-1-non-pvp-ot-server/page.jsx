import Tibia71NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpOtServerKeywordPage />;
}
