import OfficialCyntaraWikiKeywordPage, { generateMetadata } from './official-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraWikiKeywordPage />;
}
