import DuraOnlineEuropeServerKeywordPage, { generateMetadata } from './dura-online-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineEuropeServerKeywordPage />;
}
