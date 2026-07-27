import NewOtmadnessClientKeywordPage, { generateMetadata } from './new-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessClientKeywordPage />;
}
