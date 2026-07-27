import NilotMexicoServersKeywordPage, { generateMetadata } from './nilot-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotMexicoServersKeywordPage />;
}
