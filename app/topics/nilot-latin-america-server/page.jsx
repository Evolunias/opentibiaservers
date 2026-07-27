import NilotLatinAmericaServerKeywordPage, { generateMetadata } from './nilot-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotLatinAmericaServerKeywordPage />;
}
