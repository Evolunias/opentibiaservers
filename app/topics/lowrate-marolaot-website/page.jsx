import LowrateMarolaotWebsiteKeywordPage, { generateMetadata } from './lowrate-marolaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMarolaotWebsiteKeywordPage />;
}
