import ThaisotKeywordPage, { generateMetadata } from './thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotKeywordPage />;
}
