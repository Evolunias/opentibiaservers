import CurrentRangerSArcaniOtKeywordPage, { generateMetadata } from './current-ranger-s-arcani-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRangerSArcaniOtKeywordPage />;
}
