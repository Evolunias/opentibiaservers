import MemsoriaServerReviewPage, { generateMetadata } from './memsoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MemsoriaServerReviewPage />;
}
