import TibianusSimilarServersKeywordPage, { generateMetadata } from './tibianus-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusSimilarServersKeywordPage />;
}
