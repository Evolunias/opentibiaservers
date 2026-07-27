import Tibia13PvpStatusKeywordPage, { generateMetadata } from './tibia-13-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpStatusKeywordPage />;
}
