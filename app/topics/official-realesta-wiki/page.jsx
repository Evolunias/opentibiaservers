import OfficialRealestaWikiKeywordPage, { generateMetadata } from './official-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaWikiKeywordPage />;
}
