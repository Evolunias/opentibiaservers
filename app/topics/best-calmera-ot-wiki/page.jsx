import BestCalmeraOtWikiKeywordPage, { generateMetadata } from './best-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCalmeraOtWikiKeywordPage />;
}
