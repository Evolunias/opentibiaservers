import Tibia12HighExpSeasonKeywordPage, { generateMetadata } from './tibia-12-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12HighExpSeasonKeywordPage />;
}
