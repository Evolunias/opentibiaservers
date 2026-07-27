import Gunzodus71SeasonalServerKeywordPage, { generateMetadata } from './gunzodus-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus71SeasonalServerKeywordPage />;
}
