import TopCalmeraOtClientKeywordPage, { generateMetadata } from './top-calmera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCalmeraOtClientKeywordPage />;
}
