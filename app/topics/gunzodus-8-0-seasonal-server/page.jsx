import Gunzodus80SeasonalServerKeywordPage, { generateMetadata } from './gunzodus-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus80SeasonalServerKeywordPage />;
}
