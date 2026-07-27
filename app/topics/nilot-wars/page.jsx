import NilotWarsKeywordPage, { generateMetadata } from './nilot-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotWarsKeywordPage />;
}
