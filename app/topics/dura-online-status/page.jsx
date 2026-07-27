import DuraOnlineStatusKeywordPage, { generateMetadata } from './dura-online-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineStatusKeywordPage />;
}
