import Tibia96NonPvpGuideKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpGuideKeywordPage />;
}
