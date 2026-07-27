import Tibia81EvoSeasonKeywordPage, { generateMetadata } from './tibia-8-1-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81EvoSeasonKeywordPage />;
}
