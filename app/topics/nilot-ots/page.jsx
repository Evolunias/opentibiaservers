import NilotOtsKeywordPage, { generateMetadata } from './nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotOtsKeywordPage />;
}
