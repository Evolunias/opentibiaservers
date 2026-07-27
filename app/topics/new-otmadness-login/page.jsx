import NewOtmadnessLoginKeywordPage, { generateMetadata } from './new-otmadness-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessLoginKeywordPage />;
}
