import OfficialMarolaotWebsiteKeywordPage, { generateMetadata } from './official-marolaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotWebsiteKeywordPage />;
}
