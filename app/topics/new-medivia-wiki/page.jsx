import NewMediviaWikiKeywordPage, { generateMetadata } from './new-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaWikiKeywordPage />;
}
