import DuraOnlineUsaServerKeywordPage, { generateMetadata } from './dura-online-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineUsaServerKeywordPage />;
}
