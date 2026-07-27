import BestNepreniaGuideKeywordPage, { generateMetadata } from './best-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaGuideKeywordPage />;
}
