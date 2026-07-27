import Tibia15PvpServerListKeywordPage, { generateMetadata } from './tibia-15-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpServerListKeywordPage />;
}
