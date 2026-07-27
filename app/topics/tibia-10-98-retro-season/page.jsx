import Tibia1098RetroSeasonKeywordPage, { generateMetadata } from './tibia-10-98-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098RetroSeasonKeywordPage />;
}
