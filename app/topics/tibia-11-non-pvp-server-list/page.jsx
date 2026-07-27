import Tibia11NonPvpServerListKeywordPage, { generateMetadata } from './tibia-11-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpServerListKeywordPage />;
}
