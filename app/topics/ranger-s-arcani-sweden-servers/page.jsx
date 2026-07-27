import RangerSArcaniSwedenServersKeywordPage, { generateMetadata } from './ranger-s-arcani-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSwedenServersKeywordPage />;
}
