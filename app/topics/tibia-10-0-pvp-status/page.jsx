import Tibia100PvpStatusKeywordPage, { generateMetadata } from './tibia-10-0-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpStatusKeywordPage />;
}
