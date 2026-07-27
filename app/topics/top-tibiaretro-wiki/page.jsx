import TopTibiaretroWikiKeywordPage, { generateMetadata } from './top-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroWikiKeywordPage />;
}
