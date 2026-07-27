import Tibia15HighExpSeasonKeywordPage, { generateMetadata } from './tibia-15-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15HighExpSeasonKeywordPage />;
}
