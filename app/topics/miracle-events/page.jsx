import MiracleEventsKeywordPage, { generateMetadata } from './miracle-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleEventsKeywordPage />;
}
