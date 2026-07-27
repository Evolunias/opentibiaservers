import FreshStartArchlightPrivateServerKeywordPage, { generateMetadata } from './fresh-start-archlight-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightPrivateServerKeywordPage />;
}
