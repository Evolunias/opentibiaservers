import Tibia76PvpGuideKeywordPage, { generateMetadata } from './tibia-7-6-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpGuideKeywordPage />;
}
