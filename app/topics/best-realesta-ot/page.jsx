import BestRealestaOtKeywordPage, { generateMetadata } from './best-realesta-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaOtKeywordPage />;
}
