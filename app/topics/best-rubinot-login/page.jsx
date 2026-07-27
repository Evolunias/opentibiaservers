import BestRubinotLoginKeywordPage, { generateMetadata } from './best-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotLoginKeywordPage />;
}
