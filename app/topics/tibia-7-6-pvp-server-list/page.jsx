import Tibia76PvpServerListKeywordPage, { generateMetadata } from './tibia-7-6-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpServerListKeywordPage />;
}
