import Gunzodus13RetroServerKeywordPage, { generateMetadata } from './gunzodus-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus13RetroServerKeywordPage />;
}
