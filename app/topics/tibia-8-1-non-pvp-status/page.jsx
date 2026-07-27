import Tibia81NonPvpStatusKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpStatusKeywordPage />;
}
