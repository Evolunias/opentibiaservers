import MediviaUsaServersKeywordPage, { generateMetadata } from './medivia-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaUsaServersKeywordPage />;
}
