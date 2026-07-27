import NilotSeasonalServerUsaKeywordPage, { generateMetadata } from './nilot-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotSeasonalServerUsaKeywordPage />;
}
