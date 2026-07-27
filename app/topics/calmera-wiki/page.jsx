import CalmeraWikiKeywordPage, { generateMetadata } from './calmera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraWikiKeywordPage />;
}
