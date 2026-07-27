import BestCarlinotGuideKeywordPage, { generateMetadata } from './best-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotGuideKeywordPage />;
}
