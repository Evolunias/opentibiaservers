import Tibia13RetroWikiKeywordPage, { generateMetadata } from './tibia-13-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroWikiKeywordPage />;
}
