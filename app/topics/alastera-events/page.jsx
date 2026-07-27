import AlasteraEventsKeywordPage, { generateMetadata } from './alastera-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraEventsKeywordPage />;
}
