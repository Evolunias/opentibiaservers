import OfficialDemolidoresWikiKeywordPage, { generateMetadata } from './official-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresWikiKeywordPage />;
}
