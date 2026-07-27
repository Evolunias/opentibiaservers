import BestFunServerKeywordPage, { generateMetadata } from './best-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestFunServerKeywordPage />;
}
