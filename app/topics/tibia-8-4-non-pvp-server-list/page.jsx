import Tibia84NonPvpServerListKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpServerListKeywordPage />;
}
