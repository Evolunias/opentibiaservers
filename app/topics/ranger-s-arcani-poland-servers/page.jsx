import RangerSArcaniPolandServersKeywordPage, { generateMetadata } from './ranger-s-arcani-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniPolandServersKeywordPage />;
}
