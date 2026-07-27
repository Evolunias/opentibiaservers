import CurrentRangerSArcaniServerKeywordPage, { generateMetadata } from './current-ranger-s-arcani-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRangerSArcaniServerKeywordPage />;
}
