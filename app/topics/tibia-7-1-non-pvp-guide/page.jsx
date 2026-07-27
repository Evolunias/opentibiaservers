import Tibia71NonPvpGuideKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpGuideKeywordPage />;
}
