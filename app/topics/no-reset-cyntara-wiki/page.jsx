import NoResetCyntaraWikiKeywordPage, { generateMetadata } from './no-reset-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraWikiKeywordPage />;
}
