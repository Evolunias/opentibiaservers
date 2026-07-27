import TibiascapeEventsKeywordPage, { generateMetadata } from './tibiascape-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeEventsKeywordPage />;
}
