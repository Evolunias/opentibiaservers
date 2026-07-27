import Tibia80PvpStatusKeywordPage, { generateMetadata } from './tibia-8-0-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpStatusKeywordPage />;
}
