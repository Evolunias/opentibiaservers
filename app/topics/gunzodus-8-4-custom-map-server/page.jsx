import Gunzodus84CustomMapServerKeywordPage, { generateMetadata } from './gunzodus-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus84CustomMapServerKeywordPage />;
}
