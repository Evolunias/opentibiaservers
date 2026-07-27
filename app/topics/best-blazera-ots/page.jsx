import BestBlazeraOtsKeywordPage, { generateMetadata } from './best-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraOtsKeywordPage />;
}
