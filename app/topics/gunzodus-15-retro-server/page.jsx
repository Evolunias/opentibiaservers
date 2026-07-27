import Gunzodus15RetroServerKeywordPage, { generateMetadata } from './gunzodus-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus15RetroServerKeywordPage />;
}
