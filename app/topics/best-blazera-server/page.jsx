import BestBlazeraServerKeywordPage, { generateMetadata } from './best-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraServerKeywordPage />;
}
