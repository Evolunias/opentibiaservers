import NilotArgentinaServerKeywordPage, { generateMetadata } from './nilot-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotArgentinaServerKeywordPage />;
}
