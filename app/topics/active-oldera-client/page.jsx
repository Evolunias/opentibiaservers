import ActiveOlderaClientKeywordPage, { generateMetadata } from './active-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaClientKeywordPage />;
}
