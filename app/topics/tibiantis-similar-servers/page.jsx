import TibiantisSimilarServersKeywordPage, { generateMetadata } from './tibiantis-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisSimilarServersKeywordPage />;
}
