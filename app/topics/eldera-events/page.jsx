import ElderaEventsKeywordPage, { generateMetadata } from './eldera-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaEventsKeywordPage />;
}
