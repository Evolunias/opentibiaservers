import TopOxygenotPrivateServerKeywordPage, { generateMetadata } from './top-oxygenot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotPrivateServerKeywordPage />;
}
