import OlderaSimilarServersKeywordPage, { generateMetadata } from './oldera-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaSimilarServersKeywordPage />;
}
