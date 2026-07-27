import BestOtclientKeywordPage, { generateMetadata } from './best-otclient';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtclientKeywordPage />;
}
