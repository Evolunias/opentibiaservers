import DuraOnlineEventsKeywordPage, { generateMetadata } from './dura-online-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineEventsKeywordPage />;
}
