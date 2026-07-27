import Tibia13ServerPvpKeywordPage, { generateMetadata } from './tibia-13-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerPvpKeywordPage />;
}
