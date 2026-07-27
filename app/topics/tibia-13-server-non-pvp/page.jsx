import Tibia13ServerNonPvpKeywordPage, { generateMetadata } from './tibia-13-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerNonPvpKeywordPage />;
}
