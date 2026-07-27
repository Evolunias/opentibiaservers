import CanobSimilarServersKeywordPage, { generateMetadata } from './canob-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSimilarServersKeywordPage />;
}
