import DuraOnlineLatinAmericaServerKeywordPage, { generateMetadata } from './dura-online-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineLatinAmericaServerKeywordPage />;
}
