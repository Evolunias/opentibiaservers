import NewRangerSArcaniOtsKeywordPage, { generateMetadata } from './new-ranger-s-arcani-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRangerSArcaniOtsKeywordPage />;
}
