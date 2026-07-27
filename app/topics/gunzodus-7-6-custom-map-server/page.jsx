import Gunzodus76CustomMapServerKeywordPage, { generateMetadata } from './gunzodus-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus76CustomMapServerKeywordPage />;
}
