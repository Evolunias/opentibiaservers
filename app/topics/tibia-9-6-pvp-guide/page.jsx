import Tibia96PvpGuideKeywordPage, { generateMetadata } from './tibia-9-6-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpGuideKeywordPage />;
}
