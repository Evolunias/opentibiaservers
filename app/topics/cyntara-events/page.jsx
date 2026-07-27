import CyntaraEventsKeywordPage, { generateMetadata } from './cyntara-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraEventsKeywordPage />;
}
