import Tibia100EvoSeasonKeywordPage, { generateMetadata } from './tibia-10-0-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100EvoSeasonKeywordPage />;
}
