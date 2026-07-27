import BestMediviaWikiKeywordPage, { generateMetadata } from './best-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaWikiKeywordPage />;
}
