import BestRealeraOtsKeywordPage, { generateMetadata } from './best-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraOtsKeywordPage />;
}
