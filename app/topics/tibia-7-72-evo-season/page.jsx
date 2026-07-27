import Tibia772EvoSeasonKeywordPage, { generateMetadata } from './tibia-7-72-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772EvoSeasonKeywordPage />;
}
