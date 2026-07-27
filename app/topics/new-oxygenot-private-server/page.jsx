import NewOxygenotPrivateServerKeywordPage, { generateMetadata } from './new-oxygenot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotPrivateServerKeywordPage />;
}
