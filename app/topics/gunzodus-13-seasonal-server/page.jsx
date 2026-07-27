import Gunzodus13SeasonalServerKeywordPage, { generateMetadata } from './gunzodus-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus13SeasonalServerKeywordPage />;
}
