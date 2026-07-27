import BestOtmadnessWikiKeywordPage, { generateMetadata } from './best-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessWikiKeywordPage />;
}
