import PopularMarolaotWebsiteKeywordPage, { generateMetadata } from './popular-marolaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotWebsiteKeywordPage />;
}
