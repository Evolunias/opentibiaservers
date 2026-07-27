import CurrentRangerSArcaniClientKeywordPage, { generateMetadata } from './current-ranger-s-arcani-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRangerSArcaniClientKeywordPage />;
}
