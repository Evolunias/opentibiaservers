import BestUnlinePrivateServerKeywordPage, { generateMetadata } from './best-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlinePrivateServerKeywordPage />;
}
