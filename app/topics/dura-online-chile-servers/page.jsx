import DuraOnlineChileServersKeywordPage, { generateMetadata } from './dura-online-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineChileServersKeywordPage />;
}
