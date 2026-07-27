import Tibia86NonPvpGuideKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpGuideKeywordPage />;
}
