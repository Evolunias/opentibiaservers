import BestThorniaPrivateServerKeywordPage, { generateMetadata } from './best-thornia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaPrivateServerKeywordPage />;
}
