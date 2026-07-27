import HighrateTibiamePrivateServerKeywordPage, { generateMetadata } from './highrate-tibiame-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiamePrivateServerKeywordPage />;
}
