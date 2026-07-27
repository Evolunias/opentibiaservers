import BestNepreniaClientKeywordPage, { generateMetadata } from './best-neprenia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaClientKeywordPage />;
}
