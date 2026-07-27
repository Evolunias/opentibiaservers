import NewEvoleraKeywordPage, { generateMetadata } from './new-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraKeywordPage />;
}
