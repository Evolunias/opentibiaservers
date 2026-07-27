import ActiveArchlightPrivateServerKeywordPage, { generateMetadata } from './active-archlight-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightPrivateServerKeywordPage />;
}
