import CurrentEvoleraOtsKeywordPage, { generateMetadata } from './current-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraOtsKeywordPage />;
}
