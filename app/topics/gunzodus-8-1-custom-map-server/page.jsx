import Gunzodus81CustomMapServerKeywordPage, { generateMetadata } from './gunzodus-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus81CustomMapServerKeywordPage />;
}
