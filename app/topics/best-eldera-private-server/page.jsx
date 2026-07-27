import BestElderaPrivateServerKeywordPage, { generateMetadata } from './best-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaPrivateServerKeywordPage />;
}
