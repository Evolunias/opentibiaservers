import MediviaEuropeServerKeywordPage, { generateMetadata } from './medivia-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaEuropeServerKeywordPage />;
}
