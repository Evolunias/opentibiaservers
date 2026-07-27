import Tibia15NonPvpGuideKeywordPage, { generateMetadata } from './tibia-15-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpGuideKeywordPage />;
}
