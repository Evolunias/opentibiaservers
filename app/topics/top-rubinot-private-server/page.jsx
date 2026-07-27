import TopRubinotPrivateServerKeywordPage, { generateMetadata } from './top-rubinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotPrivateServerKeywordPage />;
}
