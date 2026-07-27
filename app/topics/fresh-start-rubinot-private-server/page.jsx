import FreshStartRubinotPrivateServerKeywordPage, { generateMetadata } from './fresh-start-rubinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotPrivateServerKeywordPage />;
}
