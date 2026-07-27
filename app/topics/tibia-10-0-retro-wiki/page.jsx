import Tibia100RetroWikiKeywordPage, { generateMetadata } from './tibia-10-0-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RetroWikiKeywordPage />;
}
