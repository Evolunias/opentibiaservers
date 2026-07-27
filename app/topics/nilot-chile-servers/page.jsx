import NilotChileServersKeywordPage, { generateMetadata } from './nilot-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotChileServersKeywordPage />;
}
