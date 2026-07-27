import DuraOnlinePolandServersKeywordPage, { generateMetadata } from './dura-online-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlinePolandServersKeywordPage />;
}
