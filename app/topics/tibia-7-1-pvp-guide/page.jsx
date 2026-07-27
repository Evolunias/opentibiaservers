import Tibia71PvpGuideKeywordPage, { generateMetadata } from './tibia-7-1-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpGuideKeywordPage />;
}
