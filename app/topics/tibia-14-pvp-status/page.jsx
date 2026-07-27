import Tibia14PvpStatusKeywordPage, { generateMetadata } from './tibia-14-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpStatusKeywordPage />;
}
