import Tibia13NonPvpServerListKeywordPage, { generateMetadata } from './tibia-13-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpServerListKeywordPage />;
}
