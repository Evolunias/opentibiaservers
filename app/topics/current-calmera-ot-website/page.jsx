import CurrentCalmeraOtWebsiteKeywordPage, { generateMetadata } from './current-calmera-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCalmeraOtWebsiteKeywordPage />;
}
