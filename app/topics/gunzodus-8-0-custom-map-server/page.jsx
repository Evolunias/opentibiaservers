import Gunzodus80CustomMapServerKeywordPage, { generateMetadata } from './gunzodus-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus80CustomMapServerKeywordPage />;
}
