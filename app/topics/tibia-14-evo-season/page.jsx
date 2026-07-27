import Tibia14EvoSeasonKeywordPage, { generateMetadata } from './tibia-14-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoSeasonKeywordPage />;
}
