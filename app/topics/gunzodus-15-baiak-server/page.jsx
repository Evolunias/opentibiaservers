import Gunzodus15BaiakServerKeywordPage, { generateMetadata } from './gunzodus-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus15BaiakServerKeywordPage />;
}
