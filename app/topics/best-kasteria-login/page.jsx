import BestKasteriaLoginKeywordPage, { generateMetadata } from './best-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaLoginKeywordPage />;
}
