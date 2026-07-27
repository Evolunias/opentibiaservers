import BestBlazeraLoginKeywordPage, { generateMetadata } from './best-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraLoginKeywordPage />;
}
