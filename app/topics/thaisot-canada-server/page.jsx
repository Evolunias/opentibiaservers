import ThaisotCanadaServerKeywordPage, { generateMetadata } from './thaisot-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotCanadaServerKeywordPage />;
}
