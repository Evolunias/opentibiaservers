import TopArchlightPrivateServerKeywordPage, { generateMetadata } from './top-archlight-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightPrivateServerKeywordPage />;
}
