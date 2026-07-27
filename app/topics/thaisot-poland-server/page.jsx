import ThaisotPolandServerKeywordPage, { generateMetadata } from './thaisot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotPolandServerKeywordPage />;
}
