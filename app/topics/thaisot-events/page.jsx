import ThaisotEventsKeywordPage, { generateMetadata } from './thaisot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotEventsKeywordPage />;
}
