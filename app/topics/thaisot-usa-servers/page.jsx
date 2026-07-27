import ThaisotUsaServersKeywordPage, { generateMetadata } from './thaisot-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotUsaServersKeywordPage />;
}
