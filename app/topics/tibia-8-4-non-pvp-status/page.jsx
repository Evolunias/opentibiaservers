import Tibia84NonPvpStatusKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpStatusKeywordPage />;
}
