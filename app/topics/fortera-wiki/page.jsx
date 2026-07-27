import ForteraWikiKeywordPage, { generateMetadata } from './fortera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraWikiKeywordPage />;
}
