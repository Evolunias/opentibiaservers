import OriginaltibiaMexicoServersKeywordPage, { generateMetadata } from './originaltibia-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaMexicoServersKeywordPage />;
}
