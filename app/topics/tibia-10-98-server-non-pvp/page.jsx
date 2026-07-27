import Tibia1098ServerNonPvpKeywordPage, { generateMetadata } from './tibia-10-98-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerNonPvpKeywordPage />;
}
