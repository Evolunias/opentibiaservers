import BestNepreniaServerKeywordPage, { generateMetadata } from './best-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaServerKeywordPage />;
}
