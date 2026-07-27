import Tibia12NonPvpServerListKeywordPage, { generateMetadata } from './tibia-12-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpServerListKeywordPage />;
}
