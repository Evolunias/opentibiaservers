import Tibia13EvoSeasonKeywordPage, { generateMetadata } from './tibia-13-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoSeasonKeywordPage />;
}
