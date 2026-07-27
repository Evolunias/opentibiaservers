import NtoStarEventsKeywordPage, { generateMetadata } from './nto-star-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEventsKeywordPage />;
}
