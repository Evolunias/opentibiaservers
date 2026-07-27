import CurrentUnlineOtsKeywordPage, { generateMetadata } from './current-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineOtsKeywordPage />;
}
