import BestBlazeraClientKeywordPage, { generateMetadata } from './best-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraClientKeywordPage />;
}
