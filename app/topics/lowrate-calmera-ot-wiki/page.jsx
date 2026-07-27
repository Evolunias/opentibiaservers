import LowrateCalmeraOtWikiKeywordPage, { generateMetadata } from './lowrate-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCalmeraOtWikiKeywordPage />;
}
