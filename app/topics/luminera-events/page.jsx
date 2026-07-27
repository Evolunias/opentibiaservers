import LumineraEventsKeywordPage, { generateMetadata } from './luminera-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraEventsKeywordPage />;
}
