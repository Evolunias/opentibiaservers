import OfficialTibiaretroWikiKeywordPage, { generateMetadata } from './official-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroWikiKeywordPage />;
}
