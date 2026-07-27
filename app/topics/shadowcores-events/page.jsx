import ShadowcoresEventsKeywordPage, { generateMetadata } from './shadowcores-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresEventsKeywordPage />;
}
