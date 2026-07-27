import ActiveCalmeraOtWikiKeywordPage, { generateMetadata } from './active-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCalmeraOtWikiKeywordPage />;
}
