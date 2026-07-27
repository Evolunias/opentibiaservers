import HighrateEvoleraOtsKeywordPage, { generateMetadata } from './highrate-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraOtsKeywordPage />;
}
