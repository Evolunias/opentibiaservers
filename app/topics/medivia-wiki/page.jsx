import MediviaWikiKeywordPage, { generateMetadata } from './medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWikiKeywordPage />;
}
