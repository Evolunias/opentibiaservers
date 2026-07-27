import DuraOnlineChileServerKeywordPage, { generateMetadata } from './dura-online-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineChileServerKeywordPage />;
}
