import Tibia772NonPvpServerListKeywordPage, { generateMetadata } from './tibia-7-72-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772NonPvpServerListKeywordPage />;
}
