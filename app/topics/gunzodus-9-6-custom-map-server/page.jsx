import Gunzodus96CustomMapServerKeywordPage, { generateMetadata } from './gunzodus-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus96CustomMapServerKeywordPage />;
}
