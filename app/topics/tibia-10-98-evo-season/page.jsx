import Tibia1098EvoSeasonKeywordPage, { generateMetadata } from './tibia-10-98-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098EvoSeasonKeywordPage />;
}
