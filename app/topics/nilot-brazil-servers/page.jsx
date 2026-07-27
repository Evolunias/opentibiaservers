import NilotBrazilServersKeywordPage, { generateMetadata } from './nilot-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotBrazilServersKeywordPage />;
}
