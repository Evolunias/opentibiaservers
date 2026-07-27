import BestNtoStarOtKeywordPage, { generateMetadata } from './best-nto-star-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNtoStarOtKeywordPage />;
}
