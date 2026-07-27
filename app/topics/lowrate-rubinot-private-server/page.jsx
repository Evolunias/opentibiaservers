import LowrateRubinotPrivateServerKeywordPage, { generateMetadata } from './lowrate-rubinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotPrivateServerKeywordPage />;
}
