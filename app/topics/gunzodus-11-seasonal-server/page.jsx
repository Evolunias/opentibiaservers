import Gunzodus11SeasonalServerKeywordPage, { generateMetadata } from './gunzodus-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus11SeasonalServerKeywordPage />;
}
