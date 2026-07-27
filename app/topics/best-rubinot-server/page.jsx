import BestRubinotServerKeywordPage, { generateMetadata } from './best-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotServerKeywordPage />;
}
