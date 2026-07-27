import BestNepreniaLoginKeywordPage, { generateMetadata } from './best-neprenia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaLoginKeywordPage />;
}
