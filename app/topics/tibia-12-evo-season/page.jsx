import Tibia12EvoSeasonKeywordPage, { generateMetadata } from './tibia-12-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoSeasonKeywordPage />;
}
