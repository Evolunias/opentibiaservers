import Tibia14NonPvpServerListKeywordPage, { generateMetadata } from './tibia-14-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpServerListKeywordPage />;
}
