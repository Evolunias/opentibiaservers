import NewArchlightClientKeywordPage, { generateMetadata } from './new-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightClientKeywordPage />;
}
