import RealestaEventsKeywordPage, { generateMetadata } from './realesta-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaEventsKeywordPage />;
}
