import Tibia86HighExpSeasonKeywordPage, { generateMetadata } from './tibia-8-6-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86HighExpSeasonKeywordPage />;
}
