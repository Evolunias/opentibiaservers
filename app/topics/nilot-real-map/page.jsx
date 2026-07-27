import NilotRealMapKeywordPage, { generateMetadata } from './nilot-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotRealMapKeywordPage />;
}
