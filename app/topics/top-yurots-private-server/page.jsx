import TopYurotsPrivateServerKeywordPage, { generateMetadata } from './top-yurots-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsPrivateServerKeywordPage />;
}
