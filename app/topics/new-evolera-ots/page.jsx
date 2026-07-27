import NewEvoleraOtsKeywordPage, { generateMetadata } from './new-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraOtsKeywordPage />;
}
