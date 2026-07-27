import Tibia100NonPvpGuideKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpGuideKeywordPage />;
}
