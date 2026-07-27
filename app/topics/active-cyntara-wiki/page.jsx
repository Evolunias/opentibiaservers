import ActiveCyntaraWikiKeywordPage, { generateMetadata } from './active-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraWikiKeywordPage />;
}
