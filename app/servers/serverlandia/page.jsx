import ServerlandiaServerReviewPage, { generateMetadata } from './serverlandia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ServerlandiaServerReviewPage />;
}
