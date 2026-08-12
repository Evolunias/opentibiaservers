import IglaotsServerReviewPage, { generateMetadata } from './iglaots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IglaotsServerReviewPage />;
}
