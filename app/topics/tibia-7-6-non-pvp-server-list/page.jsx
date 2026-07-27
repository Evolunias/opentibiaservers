import Tibia76NonPvpServerListKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpServerListKeywordPage />;
}
