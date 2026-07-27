import SaintsotSimilarServersKeywordPage, { generateMetadata } from './saintsot-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotSimilarServersKeywordPage />;
}
