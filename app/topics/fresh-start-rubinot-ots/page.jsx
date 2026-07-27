import FreshStartRubinotOtsKeywordPage, { generateMetadata } from './fresh-start-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotOtsKeywordPage />;
}
