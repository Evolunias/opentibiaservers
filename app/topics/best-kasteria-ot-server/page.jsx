import BestKasteriaOtServerKeywordPage, { generateMetadata } from './best-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaOtServerKeywordPage />;
}
