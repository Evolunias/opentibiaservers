import BestNtoStarServerKeywordPage, { generateMetadata } from './best-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNtoStarServerKeywordPage />;
}
