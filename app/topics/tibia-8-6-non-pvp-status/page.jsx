import Tibia86NonPvpStatusKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpStatusKeywordPage />;
}
