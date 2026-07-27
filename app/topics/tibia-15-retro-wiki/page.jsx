import Tibia15RetroWikiKeywordPage, { generateMetadata } from './tibia-15-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroWikiKeywordPage />;
}
