import ArchlightEventsKeywordPage, { generateMetadata } from './archlight-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightEventsKeywordPage />;
}
