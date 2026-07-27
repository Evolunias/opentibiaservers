import LowrateEvoleraOtsKeywordPage, { generateMetadata } from './lowrate-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraOtsKeywordPage />;
}
