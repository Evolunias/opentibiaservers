import Tibia11HighExpSeasonKeywordPage, { generateMetadata } from './tibia-11-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11HighExpSeasonKeywordPage />;
}
