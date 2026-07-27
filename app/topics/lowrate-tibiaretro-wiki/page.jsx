import LowrateTibiaretroWikiKeywordPage, { generateMetadata } from './lowrate-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroWikiKeywordPage />;
}
