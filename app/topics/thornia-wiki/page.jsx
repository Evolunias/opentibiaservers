import ThorniaWikiKeywordPage, { generateMetadata } from './thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaWikiKeywordPage />;
}
