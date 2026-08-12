import AiolosotServerReviewPage, { generateMetadata } from './aiolosot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AiolosotServerReviewPage />;
}
