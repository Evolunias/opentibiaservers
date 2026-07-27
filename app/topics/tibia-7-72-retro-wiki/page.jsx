import Tibia772RetroWikiKeywordPage, { generateMetadata } from './tibia-7-72-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772RetroWikiKeywordPage />;
}
