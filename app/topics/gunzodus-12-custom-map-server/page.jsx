import Gunzodus12CustomMapServerKeywordPage, { generateMetadata } from './gunzodus-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus12CustomMapServerKeywordPage />;
}
