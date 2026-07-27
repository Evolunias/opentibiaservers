import Tibia11EvoSeasonKeywordPage, { generateMetadata } from './tibia-11-evo-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoSeasonKeywordPage />;
}
