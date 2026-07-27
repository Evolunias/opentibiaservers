import CanobEventsKeywordPage, { generateMetadata } from './canob-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobEventsKeywordPage />;
}
