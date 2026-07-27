import NewTibiamePrivateServerKeywordPage, { generateMetadata } from './new-tibiame-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiamePrivateServerKeywordPage />;
}
