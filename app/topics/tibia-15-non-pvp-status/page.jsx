import Tibia15NonPvpStatusKeywordPage, { generateMetadata } from './tibia-15-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpStatusKeywordPage />;
}
