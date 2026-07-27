import NostaltherEventsKeywordPage, { generateMetadata } from './nostalther-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherEventsKeywordPage />;
}
