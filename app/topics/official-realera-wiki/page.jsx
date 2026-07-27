import OfficialRealeraWikiKeywordPage, { generateMetadata } from './official-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraWikiKeywordPage />;
}
