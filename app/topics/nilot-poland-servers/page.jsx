import NilotPolandServersKeywordPage, { generateMetadata } from './nilot-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotPolandServersKeywordPage />;
}
