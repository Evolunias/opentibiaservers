import Gunzodus11CustomMapServerKeywordPage, { generateMetadata } from './gunzodus-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus11CustomMapServerKeywordPage />;
}
