import ThaisotHighExpKeywordPage, { generateMetadata } from './thaisot-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotHighExpKeywordPage />;
}
