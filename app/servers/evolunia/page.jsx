import EvoluniaServerReviewPage, { generateMetadata } from './evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaServerReviewPage />;
}
