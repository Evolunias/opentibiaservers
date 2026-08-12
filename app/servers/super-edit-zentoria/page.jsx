import SuperEditZentoriaServerReviewPage, { generateMetadata } from './super-edit-zentoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SuperEditZentoriaServerReviewPage />;
}
