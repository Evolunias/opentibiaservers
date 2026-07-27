import PopularSabrehavenWikiKeywordPage, { generateMetadata } from './popular-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenWikiKeywordPage />;
}
