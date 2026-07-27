import TopThaisotClientKeywordPage, { generateMetadata } from './top-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotClientKeywordPage />;
}
