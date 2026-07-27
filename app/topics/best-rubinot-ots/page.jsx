import BestRubinotOtsKeywordPage, { generateMetadata } from './best-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotOtsKeywordPage />;
}
