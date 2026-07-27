import BestKasteriaServerKeywordPage, { generateMetadata } from './best-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaServerKeywordPage />;
}
