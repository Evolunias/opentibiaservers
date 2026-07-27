import BestKasteriaClientKeywordPage, { generateMetadata } from './best-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaClientKeywordPage />;
}
