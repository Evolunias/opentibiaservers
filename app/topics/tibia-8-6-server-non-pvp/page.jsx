import Tibia86ServerNonPvpKeywordPage, { generateMetadata } from './tibia-8-6-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerNonPvpKeywordPage />;
}
