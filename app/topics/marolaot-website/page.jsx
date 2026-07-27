import MarolaotWebsiteKeywordPage, { generateMetadata } from './marolaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotWebsiteKeywordPage />;
}
