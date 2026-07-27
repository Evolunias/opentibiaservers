import NewSabrehavenWikiKeywordPage, { generateMetadata } from './new-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenWikiKeywordPage />;
}
