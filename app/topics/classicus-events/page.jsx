import ClassicusEventsKeywordPage, { generateMetadata } from './classicus-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusEventsKeywordPage />;
}
