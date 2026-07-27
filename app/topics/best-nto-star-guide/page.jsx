import BestNtoStarGuideKeywordPage, { generateMetadata } from './best-nto-star-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNtoStarGuideKeywordPage />;
}
