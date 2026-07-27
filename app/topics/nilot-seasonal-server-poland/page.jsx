import NilotSeasonalServerPolandKeywordPage, { generateMetadata } from './nilot-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotSeasonalServerPolandKeywordPage />;
}
