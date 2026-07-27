import Tibia80NonPvpServerListKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpServerListKeywordPage />;
}
