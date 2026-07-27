import Tibia1098HighExpSeasonKeywordPage, { generateMetadata } from './tibia-10-98-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098HighExpSeasonKeywordPage />;
}
