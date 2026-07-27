import BestMadnessaliveKeywordPage, { generateMetadata } from './best-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMadnessaliveKeywordPage />;
}
