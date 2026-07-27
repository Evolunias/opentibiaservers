import LowrateTibiascapeWebsiteKeywordPage, { generateMetadata } from './lowrate-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeWebsiteKeywordPage />;
}
