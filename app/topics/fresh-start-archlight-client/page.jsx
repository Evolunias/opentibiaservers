import FreshStartArchlightClientKeywordPage, { generateMetadata } from './fresh-start-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightClientKeywordPage />;
}
