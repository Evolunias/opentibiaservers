import HighrateSabrehavenWikiKeywordPage, { generateMetadata } from './highrate-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenWikiKeywordPage />;
}
