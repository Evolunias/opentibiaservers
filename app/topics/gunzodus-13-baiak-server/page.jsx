import Gunzodus13BaiakServerKeywordPage, { generateMetadata } from './gunzodus-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus13BaiakServerKeywordPage />;
}
