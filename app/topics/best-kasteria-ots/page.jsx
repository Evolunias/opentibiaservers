import BestKasteriaOtsKeywordPage, { generateMetadata } from './best-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaOtsKeywordPage />;
}
