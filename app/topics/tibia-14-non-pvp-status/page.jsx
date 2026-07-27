import Tibia14NonPvpStatusKeywordPage, { generateMetadata } from './tibia-14-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpStatusKeywordPage />;
}
