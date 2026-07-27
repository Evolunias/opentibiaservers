import BestOtServerCanadaKeywordPage, { generateMetadata } from './best-ot-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtServerCanadaKeywordPage />;
}
