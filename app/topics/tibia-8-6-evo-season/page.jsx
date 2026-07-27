import Tibia86EvoSeasonKeywordPage, { generateMetadata } from './tibia-8-6-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86EvoSeasonKeywordPage />;
}
