import ThaisotSouthAmericaServerKeywordPage, { generateMetadata } from './thaisot-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotSouthAmericaServerKeywordPage />;
}
