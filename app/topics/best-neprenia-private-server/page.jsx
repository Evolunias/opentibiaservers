import BestNepreniaPrivateServerKeywordPage, { generateMetadata } from './best-neprenia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaPrivateServerKeywordPage />;
}
