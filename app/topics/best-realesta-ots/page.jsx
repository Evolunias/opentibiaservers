import BestRealestaOtsKeywordPage, { generateMetadata } from './best-realesta-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaOtsKeywordPage />;
}
