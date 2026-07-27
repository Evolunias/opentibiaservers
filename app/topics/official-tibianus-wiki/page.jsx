import OfficialTibianusWikiKeywordPage, { generateMetadata } from './official-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusWikiKeywordPage />;
}
