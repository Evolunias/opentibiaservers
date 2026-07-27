import OpenTibiaServerListPvpKeywordPage, { generateMetadata } from './open-tibia-server-list-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListPvpKeywordPage />;
}
