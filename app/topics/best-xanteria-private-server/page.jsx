import BestXanteriaPrivateServerKeywordPage, { generateMetadata } from './best-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaPrivateServerKeywordPage />;
}
