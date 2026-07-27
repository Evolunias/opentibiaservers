import Gunzodus14CustomMapServerKeywordPage, { generateMetadata } from './gunzodus-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus14CustomMapServerKeywordPage />;
}
