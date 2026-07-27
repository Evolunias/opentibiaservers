import Tibia80PvpServerListKeywordPage, { generateMetadata } from './tibia-8-0-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpServerListKeywordPage />;
}
