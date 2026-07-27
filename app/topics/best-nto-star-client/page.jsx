import BestNtoStarClientKeywordPage, { generateMetadata } from './best-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNtoStarClientKeywordPage />;
}
