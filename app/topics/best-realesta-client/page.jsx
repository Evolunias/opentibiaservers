import BestRealestaClientKeywordPage, { generateMetadata } from './best-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaClientKeywordPage />;
}
