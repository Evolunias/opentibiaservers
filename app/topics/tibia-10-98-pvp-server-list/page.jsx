import Tibia1098PvpServerListKeywordPage, { generateMetadata } from './tibia-10-98-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpServerListKeywordPage />;
}
