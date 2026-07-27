import OfficialElderaWikiKeywordPage, { generateMetadata } from './official-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaWikiKeywordPage />;
}
