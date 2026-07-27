import DuraOnlineArgentinaServersKeywordPage, { generateMetadata } from './dura-online-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineArgentinaServersKeywordPage />;
}
