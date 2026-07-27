import OlderaMexicoServersKeywordPage, { generateMetadata } from './oldera-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaMexicoServersKeywordPage />;
}
