import ThaisotStatusKeywordPage, { generateMetadata } from './thaisot-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotStatusKeywordPage />;
}
