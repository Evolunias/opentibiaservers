import ShiveraWikiKeywordPage, { generateMetadata } from './shivera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShiveraWikiKeywordPage />;
}
