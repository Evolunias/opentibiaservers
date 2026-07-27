import Tibia76NonPvpGuideKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpGuideKeywordPage />;
}
