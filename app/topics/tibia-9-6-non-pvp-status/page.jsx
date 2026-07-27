import Tibia96NonPvpStatusKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpStatusKeywordPage />;
}
