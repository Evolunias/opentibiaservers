import ThaisotBrazilServerKeywordPage, { generateMetadata } from './thaisot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotBrazilServerKeywordPage />;
}
