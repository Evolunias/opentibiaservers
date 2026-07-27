import TibianusEventsKeywordPage, { generateMetadata } from './tibianus-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusEventsKeywordPage />;
}
