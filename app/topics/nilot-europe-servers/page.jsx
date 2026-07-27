import NilotEuropeServersKeywordPage, { generateMetadata } from './nilot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotEuropeServersKeywordPage />;
}
