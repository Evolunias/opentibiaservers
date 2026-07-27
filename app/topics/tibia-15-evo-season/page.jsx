import Tibia15EvoSeasonKeywordPage, { generateMetadata } from './tibia-15-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoSeasonKeywordPage />;
}
