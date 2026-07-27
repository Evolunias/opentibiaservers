import Tibia86PvpGuideKeywordPage, { generateMetadata } from './tibia-8-6-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpGuideKeywordPage />;
}
