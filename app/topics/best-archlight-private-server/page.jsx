import BestArchlightPrivateServerKeywordPage, { generateMetadata } from './best-archlight-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightPrivateServerKeywordPage />;
}
