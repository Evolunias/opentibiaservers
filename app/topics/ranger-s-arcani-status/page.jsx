import RangerSArcaniStatusKeywordPage, { generateMetadata } from './ranger-s-arcani-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniStatusKeywordPage />;
}
