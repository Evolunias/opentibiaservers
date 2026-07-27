import DuraOnlineUsaServersKeywordPage, { generateMetadata } from './dura-online-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineUsaServersKeywordPage />;
}
