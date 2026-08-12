import ArcanthoriaServerReviewPage, { generateMetadata } from './arcanthoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcanthoriaServerReviewPage />;
}
