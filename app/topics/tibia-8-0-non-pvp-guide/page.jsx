import Tibia80NonPvpGuideKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpGuideKeywordPage />;
}
