import LowrateRubinotOtsKeywordPage, { generateMetadata } from './lowrate-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotOtsKeywordPage />;
}
