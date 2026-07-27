import Tibia854PvpServerListKeywordPage, { generateMetadata } from './tibia-8-54-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854PvpServerListKeywordPage />;
}
