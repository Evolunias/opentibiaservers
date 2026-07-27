import Tibia84HighExpSeasonKeywordPage, { generateMetadata } from './tibia-8-4-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84HighExpSeasonKeywordPage />;
}
