import Tibia11NonPvpGuideKeywordPage, { generateMetadata } from './tibia-11-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpGuideKeywordPage />;
}
