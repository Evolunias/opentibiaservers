import BestSaintsotGuideKeywordPage, { generateMetadata } from './best-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotGuideKeywordPage />;
}
