import TopCalmeraOtWikiKeywordPage, { generateMetadata } from './top-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCalmeraOtWikiKeywordPage />;
}
