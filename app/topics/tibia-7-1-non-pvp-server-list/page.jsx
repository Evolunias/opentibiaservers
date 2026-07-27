import Tibia71NonPvpServerListKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpServerListKeywordPage />;
}
