import BestMediviaGuideKeywordPage, { generateMetadata } from './best-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaGuideKeywordPage />;
}
