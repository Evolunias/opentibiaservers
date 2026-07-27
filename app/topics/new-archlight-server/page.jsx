import NewArchlightServerKeywordPage, { generateMetadata } from './new-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightServerKeywordPage />;
}
