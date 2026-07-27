import DuraOnlineArgentinaServerKeywordPage, { generateMetadata } from './dura-online-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineArgentinaServerKeywordPage />;
}
