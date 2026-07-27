import Gunzodus76SeasonalServerKeywordPage, { generateMetadata } from './gunzodus-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus76SeasonalServerKeywordPage />;
}
