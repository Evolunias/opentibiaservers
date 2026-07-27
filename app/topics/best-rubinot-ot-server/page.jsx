import BestRubinotOtServerKeywordPage, { generateMetadata } from './best-rubinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotOtServerKeywordPage />;
}
