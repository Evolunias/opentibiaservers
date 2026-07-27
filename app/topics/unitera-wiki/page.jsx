import UniteraWikiKeywordPage, { generateMetadata } from './unitera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UniteraWikiKeywordPage />;
}
