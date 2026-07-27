import OfficialArchlightPrivateServerKeywordPage, { generateMetadata } from './official-archlight-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightPrivateServerKeywordPage />;
}
