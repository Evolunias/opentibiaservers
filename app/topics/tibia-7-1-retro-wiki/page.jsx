import Tibia71RetroWikiKeywordPage, { generateMetadata } from './tibia-7-1-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RetroWikiKeywordPage />;
}
