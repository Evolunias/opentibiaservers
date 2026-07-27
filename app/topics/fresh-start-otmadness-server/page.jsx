import FreshStartOtmadnessServerKeywordPage, { generateMetadata } from './fresh-start-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOtmadnessServerKeywordPage />;
}
