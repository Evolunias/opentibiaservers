import NilotCanadaServersKeywordPage, { generateMetadata } from './nilot-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotCanadaServersKeywordPage />;
}
