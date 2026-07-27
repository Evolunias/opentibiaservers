import NilotGermanyServersKeywordPage, { generateMetadata } from './nilot-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotGermanyServersKeywordPage />;
}
