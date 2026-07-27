import RangerSArcaniEuropeServersKeywordPage, { generateMetadata } from './ranger-s-arcani-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniEuropeServersKeywordPage />;
}
