import NilotPolandServerKeywordPage, { generateMetadata } from './nilot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotPolandServerKeywordPage />;
}
