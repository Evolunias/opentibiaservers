import Tibia96PvpStatusKeywordPage, { generateMetadata } from './tibia-9-6-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpStatusKeywordPage />;
}
