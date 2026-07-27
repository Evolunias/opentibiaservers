import NilotArgentinaServersKeywordPage, { generateMetadata } from './nilot-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotArgentinaServersKeywordPage />;
}
