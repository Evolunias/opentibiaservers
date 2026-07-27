import Gunzodus11BaiakServerKeywordPage, { generateMetadata } from './gunzodus-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus11BaiakServerKeywordPage />;
}
