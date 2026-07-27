import DuraOnlineEuropeServersKeywordPage, { generateMetadata } from './dura-online-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineEuropeServersKeywordPage />;
}
