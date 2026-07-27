import RangerSArcaniNorthAmericaServersKeywordPage, { generateMetadata } from './ranger-s-arcani-north-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniNorthAmericaServersKeywordPage />;
}
