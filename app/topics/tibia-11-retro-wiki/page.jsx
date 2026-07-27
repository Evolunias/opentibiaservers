import Tibia11RetroWikiKeywordPage, { generateMetadata } from './tibia-11-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroWikiKeywordPage />;
}
