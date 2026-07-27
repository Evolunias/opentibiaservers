import BestElderaOtsKeywordPage, { generateMetadata } from './best-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaOtsKeywordPage />;
}
