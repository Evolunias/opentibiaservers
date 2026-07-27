import BestOxygenotOtsKeywordPage, { generateMetadata } from './best-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOxygenotOtsKeywordPage />;
}
