import NoResetOlderaWikiKeywordPage, { generateMetadata } from './no-reset-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaWikiKeywordPage />;
}
