import MidhemEventsKeywordPage, { generateMetadata } from './midhem-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemEventsKeywordPage />;
}
