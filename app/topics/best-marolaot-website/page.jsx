import BestMarolaotWebsiteKeywordPage, { generateMetadata } from './best-marolaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMarolaotWebsiteKeywordPage />;
}
