import BestArchlightOtKeywordPage, { generateMetadata } from './best-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightOtKeywordPage />;
}
