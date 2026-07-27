import OlderaEventsKeywordPage, { generateMetadata } from './oldera-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaEventsKeywordPage />;
}
