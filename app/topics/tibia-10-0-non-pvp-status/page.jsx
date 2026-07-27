import Tibia100NonPvpStatusKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpStatusKeywordPage />;
}
