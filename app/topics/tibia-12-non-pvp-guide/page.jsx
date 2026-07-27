import Tibia12NonPvpGuideKeywordPage, { generateMetadata } from './tibia-12-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpGuideKeywordPage />;
}
