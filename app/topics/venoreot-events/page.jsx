import VenoreotEventsKeywordPage, { generateMetadata } from './venoreot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotEventsKeywordPage />;
}
