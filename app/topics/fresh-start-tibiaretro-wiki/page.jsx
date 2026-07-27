import FreshStartTibiaretroWikiKeywordPage, { generateMetadata } from './fresh-start-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaretroWikiKeywordPage />;
}
