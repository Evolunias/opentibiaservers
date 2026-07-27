import TopThaisotServerKeywordPage, { generateMetadata } from './top-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotServerKeywordPage />;
}
