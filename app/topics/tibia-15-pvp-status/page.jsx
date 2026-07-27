import Tibia15PvpStatusKeywordPage, { generateMetadata } from './tibia-15-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpStatusKeywordPage />;
}
