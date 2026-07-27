import RangerSArcaniWarsKeywordPage, { generateMetadata } from './ranger-s-arcani-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniWarsKeywordPage />;
}
