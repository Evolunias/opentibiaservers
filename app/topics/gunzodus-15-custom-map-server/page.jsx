import Gunzodus15CustomMapServerKeywordPage, { generateMetadata } from './gunzodus-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus15CustomMapServerKeywordPage />;
}
