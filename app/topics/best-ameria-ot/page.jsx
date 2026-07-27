import BestAmeriaOtKeywordPage, { generateMetadata } from './best-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaOtKeywordPage />;
}
