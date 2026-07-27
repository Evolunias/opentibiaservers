import ActiveAmeriaWikiKeywordPage, { generateMetadata } from './active-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaWikiKeywordPage />;
}
