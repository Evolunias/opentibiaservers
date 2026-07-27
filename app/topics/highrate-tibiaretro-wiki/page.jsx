import HighrateTibiaretroWikiKeywordPage, { generateMetadata } from './highrate-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroWikiKeywordPage />;
}
