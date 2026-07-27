import EvoluniaMexicoServersKeywordPage, { generateMetadata } from './evolunia-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaMexicoServersKeywordPage />;
}
