import Gunzodus96SeasonalServerKeywordPage, { generateMetadata } from './gunzodus-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus96SeasonalServerKeywordPage />;
}
