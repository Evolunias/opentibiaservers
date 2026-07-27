import NilotUsaServerKeywordPage, { generateMetadata } from './nilot-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotUsaServerKeywordPage />;
}
