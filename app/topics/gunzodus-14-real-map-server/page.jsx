import Gunzodus14RealMapServerKeywordPage, { generateMetadata } from './gunzodus-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus14RealMapServerKeywordPage />;
}
