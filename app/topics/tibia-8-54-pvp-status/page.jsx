import Tibia854PvpStatusKeywordPage, { generateMetadata } from './tibia-8-54-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854PvpStatusKeywordPage />;
}
