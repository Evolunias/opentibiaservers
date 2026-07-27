import NewTibiaretroWikiKeywordPage, { generateMetadata } from './new-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroWikiKeywordPage />;
}
