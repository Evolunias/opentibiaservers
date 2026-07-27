import DuraOnlinePolandServerKeywordPage, { generateMetadata } from './dura-online-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlinePolandServerKeywordPage />;
}
