import August13th2022ServerReviewPage, { generateMetadata } from './august-13th-2022';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <August13th2022ServerReviewPage />;
}
