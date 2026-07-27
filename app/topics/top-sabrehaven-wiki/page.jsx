import TopSabrehavenWikiKeywordPage, { generateMetadata } from './top-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenWikiKeywordPage />;
}
