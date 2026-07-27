import ThaisotResetKeywordPage, { generateMetadata } from './thaisot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotResetKeywordPage />;
}
