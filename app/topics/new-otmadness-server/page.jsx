import NewOtmadnessServerKeywordPage, { generateMetadata } from './new-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessServerKeywordPage />;
}
