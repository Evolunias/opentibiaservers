import Tibia74RetroWikiKeywordPage, { generateMetadata } from './tibia-7-4-retro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RetroWikiKeywordPage />;
}
