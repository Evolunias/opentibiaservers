import DuraOnlineLatinAmericaServersKeywordPage, { generateMetadata } from './dura-online-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineLatinAmericaServersKeywordPage />;
}
