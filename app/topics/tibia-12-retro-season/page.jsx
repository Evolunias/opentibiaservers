import Tibia12RetroSeasonKeywordPage, { generateMetadata } from './tibia-12-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroSeasonKeywordPage />;
}
