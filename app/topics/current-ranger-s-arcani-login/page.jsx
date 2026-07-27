import CurrentRangerSArcaniLoginKeywordPage, { generateMetadata } from './current-ranger-s-arcani-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRangerSArcaniLoginKeywordPage />;
}
