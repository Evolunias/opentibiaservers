import NewCarlinotOtsKeywordPage, { generateMetadata } from './new-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotOtsKeywordPage />;
}
