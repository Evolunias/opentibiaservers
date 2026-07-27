import Tibia71PvpStatusKeywordPage, { generateMetadata } from './tibia-7-1-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpStatusKeywordPage />;
}
