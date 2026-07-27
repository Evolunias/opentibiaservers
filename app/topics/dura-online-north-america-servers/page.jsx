import DuraOnlineNorthAmericaServersKeywordPage, { generateMetadata } from './dura-online-north-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineNorthAmericaServersKeywordPage />;
}
