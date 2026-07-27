import Tibia76PvpStatusKeywordPage, { generateMetadata } from './tibia-7-6-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpStatusKeywordPage />;
}
