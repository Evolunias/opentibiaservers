import BlazeraPolandServersKeywordPage, { generateMetadata } from './blazera-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraPolandServersKeywordPage />;
}
