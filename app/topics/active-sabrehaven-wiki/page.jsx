import ActiveSabrehavenWikiKeywordPage, { generateMetadata } from './active-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenWikiKeywordPage />;
}
