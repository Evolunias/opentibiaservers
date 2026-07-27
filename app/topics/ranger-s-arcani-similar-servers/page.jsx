import RangerSArcaniSimilarServersKeywordPage, { generateMetadata } from './ranger-s-arcani-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSimilarServersKeywordPage />;
}
