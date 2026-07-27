import BestOlderaOtKeywordPage, { generateMetadata } from './best-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOlderaOtKeywordPage />;
}
