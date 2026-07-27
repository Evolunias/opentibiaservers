import Tibia100NonPvpServerListKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpServerListKeywordPage />;
}
