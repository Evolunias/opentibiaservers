import Tibia15NonPvpServerListKeywordPage, { generateMetadata } from './tibia-15-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpServerListKeywordPage />;
}
