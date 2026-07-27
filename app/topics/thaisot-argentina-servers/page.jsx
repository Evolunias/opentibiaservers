import ThaisotArgentinaServersKeywordPage, { generateMetadata } from './thaisot-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotArgentinaServersKeywordPage />;
}
