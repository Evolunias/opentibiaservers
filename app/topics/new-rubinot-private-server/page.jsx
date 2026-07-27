import NewRubinotPrivateServerKeywordPage, { generateMetadata } from './new-rubinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotPrivateServerKeywordPage />;
}
