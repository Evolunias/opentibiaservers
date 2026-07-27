import OpenTibiaServerListNonPvpKeywordPage, { generateMetadata } from './open-tibia-server-list-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListNonPvpKeywordPage />;
}
