import BestRealeraKeywordPage, { generateMetadata } from './best-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraKeywordPage />;
}
