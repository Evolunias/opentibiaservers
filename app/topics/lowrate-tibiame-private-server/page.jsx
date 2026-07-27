import LowrateTibiamePrivateServerKeywordPage, { generateMetadata } from './lowrate-tibiame-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiamePrivateServerKeywordPage />;
}
