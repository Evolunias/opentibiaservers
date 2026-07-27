import OfficialTibiamePrivateServerKeywordPage, { generateMetadata } from './official-tibiame-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiamePrivateServerKeywordPage />;
}
