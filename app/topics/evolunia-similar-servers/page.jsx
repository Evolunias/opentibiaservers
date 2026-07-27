import EvoluniaSimilarServersKeywordPage, { generateMetadata } from './evolunia-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaSimilarServersKeywordPage />;
}
