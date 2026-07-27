import BestRealeraPrivateServerKeywordPage, { generateMetadata } from './best-realera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraPrivateServerKeywordPage />;
}
