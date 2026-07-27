import Tibia86PvpServerListKeywordPage, { generateMetadata } from './tibia-8-6-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpServerListKeywordPage />;
}
