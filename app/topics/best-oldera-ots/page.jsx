import BestOlderaOtsKeywordPage, { generateMetadata } from './best-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOlderaOtsKeywordPage />;
}
