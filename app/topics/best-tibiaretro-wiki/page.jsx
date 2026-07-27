import BestTibiaretroWikiKeywordPage, { generateMetadata } from './best-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroWikiKeywordPage />;
}
