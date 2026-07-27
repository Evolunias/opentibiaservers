import EvoleraEventsKeywordPage, { generateMetadata } from './evolera-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraEventsKeywordPage />;
}
