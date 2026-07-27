import RangerSArcaniUsaServersKeywordPage, { generateMetadata } from './ranger-s-arcani-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniUsaServersKeywordPage />;
}
