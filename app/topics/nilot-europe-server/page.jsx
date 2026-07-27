import NilotEuropeServerKeywordPage, { generateMetadata } from './nilot-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotEuropeServerKeywordPage />;
}
