import Tibia12NonPvpStatusKeywordPage, { generateMetadata } from './tibia-12-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpStatusKeywordPage />;
}
