import RangerSArcaniTrailerKeywordPage, { generateMetadata } from './ranger-s-arcani-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniTrailerKeywordPage />;
}
