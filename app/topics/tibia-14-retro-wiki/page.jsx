import Tibia14RetroWikiKeywordPage, { generateMetadata } from './tibia-14-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroWikiKeywordPage />;
}
