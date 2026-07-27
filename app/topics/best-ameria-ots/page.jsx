import BestAmeriaOtsKeywordPage, { generateMetadata } from './best-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaOtsKeywordPage />;
}
