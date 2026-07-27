import BestMediviaPrivateServerKeywordPage, { generateMetadata } from './best-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaPrivateServerKeywordPage />;
}
