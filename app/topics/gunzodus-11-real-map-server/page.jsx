import Gunzodus11RealMapServerKeywordPage, { generateMetadata } from './gunzodus-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus11RealMapServerKeywordPage />;
}
