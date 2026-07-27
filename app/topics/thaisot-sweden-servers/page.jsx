import ThaisotSwedenServersKeywordPage, { generateMetadata } from './thaisot-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotSwedenServersKeywordPage />;
}
