import LowrateOxygenotOtsKeywordPage, { generateMetadata } from './lowrate-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotOtsKeywordPage />;
}
