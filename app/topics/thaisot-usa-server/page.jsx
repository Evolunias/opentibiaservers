import ThaisotUsaServerKeywordPage, { generateMetadata } from './thaisot-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotUsaServerKeywordPage />;
}
