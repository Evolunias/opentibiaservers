import TopCalmeraOtKeywordPage, { generateMetadata } from './top-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCalmeraOtKeywordPage />;
}
