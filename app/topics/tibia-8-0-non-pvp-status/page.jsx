import Tibia80NonPvpStatusKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpStatusKeywordPage />;
}
