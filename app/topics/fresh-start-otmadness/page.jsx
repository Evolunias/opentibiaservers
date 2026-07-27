import FreshStartOtmadnessKeywordPage, { generateMetadata } from './fresh-start-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOtmadnessKeywordPage />;
}
