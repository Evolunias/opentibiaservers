import Tibia13NonPvpStatusKeywordPage, { generateMetadata } from './tibia-13-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpStatusKeywordPage />;
}
