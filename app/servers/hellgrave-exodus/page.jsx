import HellgraveExodusServerReviewPage, { generateMetadata } from './hellgrave-exodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HellgraveExodusServerReviewPage />;
}
