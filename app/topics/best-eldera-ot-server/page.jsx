import BestElderaOtServerKeywordPage, { generateMetadata } from './best-eldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaOtServerKeywordPage />;
}
