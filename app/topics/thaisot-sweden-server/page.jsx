import ThaisotSwedenServerKeywordPage, { generateMetadata } from './thaisot-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotSwedenServerKeywordPage />;
}
