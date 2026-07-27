import CurrentAmeriaWikiKeywordPage, { generateMetadata } from './current-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaWikiKeywordPage />;
}
