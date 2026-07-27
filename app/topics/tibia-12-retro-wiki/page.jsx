import Tibia12RetroWikiKeywordPage, { generateMetadata } from './tibia-12-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroWikiKeywordPage />;
}
