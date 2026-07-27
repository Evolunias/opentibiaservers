import Tibia13HighExpSeasonKeywordPage, { generateMetadata } from './tibia-13-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13HighExpSeasonKeywordPage />;
}
