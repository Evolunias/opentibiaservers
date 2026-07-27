import Tibia86NonPvpServerListKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpServerListKeywordPage />;
}
