import Tibia96NonPvpServerListKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpServerListKeywordPage />;
}
