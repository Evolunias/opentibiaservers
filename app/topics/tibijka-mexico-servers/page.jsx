import TibijkaMexicoServersKeywordPage, { generateMetadata } from './tibijka-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaMexicoServersKeywordPage />;
}
