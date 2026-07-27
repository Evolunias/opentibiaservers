import Tibia76RetroWikiKeywordPage, { generateMetadata } from './tibia-7-6-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RetroWikiKeywordPage />;
}
