import ArmiaToprosteServerReviewPage, { generateMetadata } from './armia-toproste';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArmiaToprosteServerReviewPage />;
}
