import ThaisotFranceServersKeywordPage, { generateMetadata } from './thaisot-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotFranceServersKeywordPage />;
}
