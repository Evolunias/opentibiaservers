import Gunzodus12SeasonalServerKeywordPage, { generateMetadata } from './gunzodus-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus12SeasonalServerKeywordPage />;
}
