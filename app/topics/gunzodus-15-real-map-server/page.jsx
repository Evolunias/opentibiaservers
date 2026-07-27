import Gunzodus15RealMapServerKeywordPage, { generateMetadata } from './gunzodus-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus15RealMapServerKeywordPage />;
}
