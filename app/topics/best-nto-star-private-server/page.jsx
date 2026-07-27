import BestNtoStarPrivateServerKeywordPage, { generateMetadata } from './best-nto-star-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNtoStarPrivateServerKeywordPage />;
}
