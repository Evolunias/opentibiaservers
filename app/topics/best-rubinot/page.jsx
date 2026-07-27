import BestRubinotKeywordPage, { generateMetadata } from './best-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotKeywordPage />;
}
