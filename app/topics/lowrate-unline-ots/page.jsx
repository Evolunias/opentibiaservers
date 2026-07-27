import LowrateUnlineOtsKeywordPage, { generateMetadata } from './lowrate-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineOtsKeywordPage />;
}
