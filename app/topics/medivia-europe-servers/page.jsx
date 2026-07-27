import MediviaEuropeServersKeywordPage, { generateMetadata } from './medivia-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaEuropeServersKeywordPage />;
}
