import DuraOnlineCanadaServerKeywordPage, { generateMetadata } from './dura-online-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineCanadaServerKeywordPage />;
}
