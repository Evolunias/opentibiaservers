import Tibia12PvpGuideKeywordPage, { generateMetadata } from './tibia-12-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpGuideKeywordPage />;
}
