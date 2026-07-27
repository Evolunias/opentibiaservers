import BestRealestaKeywordPage, { generateMetadata } from './best-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaKeywordPage />;
}
