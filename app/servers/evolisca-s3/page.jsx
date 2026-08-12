import EvoliscaS3ServerReviewPage, { generateMetadata } from './evolisca-s3';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoliscaS3ServerReviewPage />;
}
