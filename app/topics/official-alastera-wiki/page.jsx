import OfficialAlasteraWikiKeywordPage, { generateMetadata } from './official-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraWikiKeywordPage />;
}
