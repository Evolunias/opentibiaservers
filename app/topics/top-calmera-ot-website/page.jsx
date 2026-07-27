import TopCalmeraOtWebsiteKeywordPage, { generateMetadata } from './top-calmera-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCalmeraOtWebsiteKeywordPage />;
}
