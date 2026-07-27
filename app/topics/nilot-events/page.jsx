import NilotEventsKeywordPage, { generateMetadata } from './nilot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotEventsKeywordPage />;
}
