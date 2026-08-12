import MysteriaServerReviewPage, { generateMetadata } from './mysteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MysteriaServerReviewPage />;
}
