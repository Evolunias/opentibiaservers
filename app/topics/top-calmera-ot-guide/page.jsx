import TopCalmeraOtGuideKeywordPage, { generateMetadata } from './top-calmera-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCalmeraOtGuideKeywordPage />;
}
