import Tibia1098NonPvpServerListKeywordPage, { generateMetadata } from './tibia-10-98-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NonPvpServerListKeywordPage />;
}
