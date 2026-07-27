import MediviaPolandServersKeywordPage, { generateMetadata } from './medivia-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPolandServersKeywordPage />;
}
