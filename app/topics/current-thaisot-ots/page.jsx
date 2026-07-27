import CurrentThaisotOtsKeywordPage, { generateMetadata } from './current-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotOtsKeywordPage />;
}
