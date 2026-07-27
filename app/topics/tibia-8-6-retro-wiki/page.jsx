import Tibia86RetroWikiKeywordPage, { generateMetadata } from './tibia-8-6-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RetroWikiKeywordPage />;
}
