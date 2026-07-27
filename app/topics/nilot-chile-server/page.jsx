import NilotChileServerKeywordPage, { generateMetadata } from './nilot-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotChileServerKeywordPage />;
}
