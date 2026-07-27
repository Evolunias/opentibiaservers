import TibiaretroWikiKeywordPage, { generateMetadata } from './tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroWikiKeywordPage />;
}
