import RangerSArcaniResetKeywordPage, { generateMetadata } from './ranger-s-arcani-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniResetKeywordPage />;
}
