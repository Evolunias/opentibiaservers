import Tibia772PvpStatusKeywordPage, { generateMetadata } from './tibia-7-72-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpStatusKeywordPage />;
}
