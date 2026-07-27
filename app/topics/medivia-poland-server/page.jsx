import MediviaPolandServerKeywordPage, { generateMetadata } from './medivia-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPolandServerKeywordPage />;
}
