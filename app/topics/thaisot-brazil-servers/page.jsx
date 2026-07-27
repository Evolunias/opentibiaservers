import ThaisotBrazilServersKeywordPage, { generateMetadata } from './thaisot-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotBrazilServersKeywordPage />;
}
