import CurrentTibiaretroWikiKeywordPage, { generateMetadata } from './current-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroWikiKeywordPage />;
}
