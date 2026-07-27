import BestArchlightOtServerKeywordPage, { generateMetadata } from './best-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightOtServerKeywordPage />;
}
