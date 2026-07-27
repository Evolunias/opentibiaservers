import Tibia81NonPvpGuideKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpGuideKeywordPage />;
}
