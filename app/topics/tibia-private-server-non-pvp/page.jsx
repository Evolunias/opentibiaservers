import TibiaPrivateServerNonPvpKeywordPage, { generateMetadata } from './tibia-private-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerNonPvpKeywordPage />;
}
