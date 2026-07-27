import PopularMidhemWikiKeywordPage, { generateMetadata } from './popular-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemWikiKeywordPage />;
}
