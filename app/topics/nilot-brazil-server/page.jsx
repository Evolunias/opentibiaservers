import NilotBrazilServerKeywordPage, { generateMetadata } from './nilot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotBrazilServerKeywordPage />;
}
