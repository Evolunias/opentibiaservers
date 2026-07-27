import MediviaClientKeywordPage, { generateMetadata } from './medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaClientKeywordPage />;
}
