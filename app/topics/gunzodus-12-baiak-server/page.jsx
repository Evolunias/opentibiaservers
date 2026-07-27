import Gunzodus12BaiakServerKeywordPage, { generateMetadata } from './gunzodus-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus12BaiakServerKeywordPage />;
}
