import Tibia13PvpGuideKeywordPage, { generateMetadata } from './tibia-13-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpGuideKeywordPage />;
}
