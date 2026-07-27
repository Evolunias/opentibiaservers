import Tibia15PvpGuideKeywordPage, { generateMetadata } from './tibia-15-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpGuideKeywordPage />;
}
