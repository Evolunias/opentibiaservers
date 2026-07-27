import TibijkaEventsKeywordPage, { generateMetadata } from './tibijka-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaEventsKeywordPage />;
}
