import ClassickDrakoriaEventsKeywordPage, { generateMetadata } from './classick-drakoria-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaEventsKeywordPage />;
}
