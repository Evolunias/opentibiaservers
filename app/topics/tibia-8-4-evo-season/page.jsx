import Tibia84EvoSeasonKeywordPage, { generateMetadata } from './tibia-8-4-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84EvoSeasonKeywordPage />;
}
