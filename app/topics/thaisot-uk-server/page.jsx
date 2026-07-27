import ThaisotUkServerKeywordPage, { generateMetadata } from './thaisot-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotUkServerKeywordPage />;
}
