import NewMarolaotWebsiteKeywordPage, { generateMetadata } from './new-marolaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotWebsiteKeywordPage />;
}
