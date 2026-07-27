import NilotUsaServersKeywordPage, { generateMetadata } from './nilot-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotUsaServersKeywordPage />;
}
