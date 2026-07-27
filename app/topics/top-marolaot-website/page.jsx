import TopMarolaotWebsiteKeywordPage, { generateMetadata } from './top-marolaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotWebsiteKeywordPage />;
}
