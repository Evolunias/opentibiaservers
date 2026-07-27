import Tibia1098ServerPvpKeywordPage, { generateMetadata } from './tibia-10-98-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerPvpKeywordPage />;
}
