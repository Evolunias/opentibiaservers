import Tibia86ServerPvpKeywordPage, { generateMetadata } from './tibia-8-6-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerPvpKeywordPage />;
}
