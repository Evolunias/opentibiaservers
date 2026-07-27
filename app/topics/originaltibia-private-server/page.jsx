import OriginaltibiaPrivateServerKeywordPage, { generateMetadata } from './originaltibia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaPrivateServerKeywordPage />;
}
