import Tibia81NonPvpServerListKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpServerListKeywordPage />;
}
