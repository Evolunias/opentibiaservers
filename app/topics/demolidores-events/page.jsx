import DemolidoresEventsKeywordPage, { generateMetadata } from './demolidores-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresEventsKeywordPage />;
}
