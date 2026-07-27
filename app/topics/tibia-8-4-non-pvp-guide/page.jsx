import Tibia84NonPvpGuideKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpGuideKeywordPage />;
}
