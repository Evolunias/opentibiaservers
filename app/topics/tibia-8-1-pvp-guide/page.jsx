import Tibia81PvpGuideKeywordPage, { generateMetadata } from './tibia-8-1-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpGuideKeywordPage />;
}
