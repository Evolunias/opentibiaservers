import Gunzodus86SeasonalServerKeywordPage, { generateMetadata } from './gunzodus-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus86SeasonalServerKeywordPage />;
}
