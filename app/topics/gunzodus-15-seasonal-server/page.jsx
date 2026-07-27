import Gunzodus15SeasonalServerKeywordPage, { generateMetadata } from './gunzodus-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus15SeasonalServerKeywordPage />;
}
