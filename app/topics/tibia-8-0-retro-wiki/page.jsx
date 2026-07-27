import Tibia80RetroWikiKeywordPage, { generateMetadata } from './tibia-8-0-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroWikiKeywordPage />;
}
