import BestAlasteraGuideKeywordPage, { generateMetadata } from './best-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraGuideKeywordPage />;
}
