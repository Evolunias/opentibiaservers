import BestBaiakServerKeywordPage, { generateMetadata } from './best-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBaiakServerKeywordPage />;
}
