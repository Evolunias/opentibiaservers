import OriginaltibiaSimilarServersKeywordPage, { generateMetadata } from './originaltibia-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaSimilarServersKeywordPage />;
}
