import NoResetAmeriaWikiKeywordPage, { generateMetadata } from './no-reset-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaWikiKeywordPage />;
}
