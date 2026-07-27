import BestNtoStarKeywordPage, { generateMetadata } from './best-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNtoStarKeywordPage />;
}
