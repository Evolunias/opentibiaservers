import DuraOnlineCanadaServersKeywordPage, { generateMetadata } from './dura-online-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineCanadaServersKeywordPage />;
}
