import KasteriaPrivateServerKeywordPage, { generateMetadata } from './kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPrivateServerKeywordPage />;
}
