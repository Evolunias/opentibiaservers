import Tibia1098NonPvpServerKeywordPage, { generateMetadata } from './tibia-10-98-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NonPvpServerKeywordPage />;
}
