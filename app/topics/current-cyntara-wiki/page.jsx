import CurrentCyntaraWikiKeywordPage, { generateMetadata } from './current-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraWikiKeywordPage />;
}
