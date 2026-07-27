import SaintsotEventsKeywordPage, { generateMetadata } from './saintsot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotEventsKeywordPage />;
}
