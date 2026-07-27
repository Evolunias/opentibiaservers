import NewArchlightOtsKeywordPage, { generateMetadata } from './new-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightOtsKeywordPage />;
}
