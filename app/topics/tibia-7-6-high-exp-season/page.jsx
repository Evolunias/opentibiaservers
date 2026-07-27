import Tibia76HighExpSeasonKeywordPage, { generateMetadata } from './tibia-7-6-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76HighExpSeasonKeywordPage />;
}
