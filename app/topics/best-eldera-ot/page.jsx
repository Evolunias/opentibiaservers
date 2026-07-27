import BestElderaOtKeywordPage, { generateMetadata } from './best-eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaOtKeywordPage />;
}
