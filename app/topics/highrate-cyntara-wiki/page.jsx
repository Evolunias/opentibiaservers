import HighrateCyntaraWikiKeywordPage, { generateMetadata } from './highrate-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraWikiKeywordPage />;
}
