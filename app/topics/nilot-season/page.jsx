import NilotSeasonKeywordPage, { generateMetadata } from './nilot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotSeasonKeywordPage />;
}
