import NewOtmadnessOtKeywordPage, { generateMetadata } from './new-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessOtKeywordPage />;
}
