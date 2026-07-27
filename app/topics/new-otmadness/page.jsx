import NewOtmadnessKeywordPage, { generateMetadata } from './new-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessKeywordPage />;
}
