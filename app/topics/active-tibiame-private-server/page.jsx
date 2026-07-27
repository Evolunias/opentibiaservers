import ActiveTibiamePrivateServerKeywordPage, { generateMetadata } from './active-tibiame-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiamePrivateServerKeywordPage />;
}
