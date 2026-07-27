import MediviaCanadaServerKeywordPage, { generateMetadata } from './medivia-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCanadaServerKeywordPage />;
}
