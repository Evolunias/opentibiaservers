import FreshStartCalmeraOtKeywordPage, { generateMetadata } from './fresh-start-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCalmeraOtKeywordPage />;
}
