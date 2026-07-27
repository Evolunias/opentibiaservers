import BestRealestaServerKeywordPage, { generateMetadata } from './best-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaServerKeywordPage />;
}
