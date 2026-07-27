import Tibia76NonPvpStatusKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpStatusKeywordPage />;
}
