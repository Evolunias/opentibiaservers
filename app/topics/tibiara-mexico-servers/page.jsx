import TibiaraMexicoServersKeywordPage, { generateMetadata } from './tibiara-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraMexicoServersKeywordPage />;
}
