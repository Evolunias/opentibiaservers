import Tibia80HighExpSeasonKeywordPage, { generateMetadata } from './tibia-8-0-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80HighExpSeasonKeywordPage />;
}
