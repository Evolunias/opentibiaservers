import TopTibiascapeWebsiteKeywordPage, { generateMetadata } from './top-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeWebsiteKeywordPage />;
}
