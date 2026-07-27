import Gunzodus12RealMapServerKeywordPage, { generateMetadata } from './gunzodus-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus12RealMapServerKeywordPage />;
}
