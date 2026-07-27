import ThaisotServerKeywordPage, { generateMetadata } from './thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotServerKeywordPage />;
}
