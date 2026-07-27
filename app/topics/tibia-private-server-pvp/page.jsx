import TibiaPrivateServerPvpKeywordPage, { generateMetadata } from './tibia-private-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerPvpKeywordPage />;
}
