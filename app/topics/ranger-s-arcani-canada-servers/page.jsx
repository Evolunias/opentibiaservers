import RangerSArcaniCanadaServersKeywordPage, { generateMetadata } from './ranger-s-arcani-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniCanadaServersKeywordPage />;
}
