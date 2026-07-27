import HighrateTibiascapeWebsiteKeywordPage, { generateMetadata } from './highrate-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeWebsiteKeywordPage />;
}
