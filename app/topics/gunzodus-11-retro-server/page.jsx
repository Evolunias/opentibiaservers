import Gunzodus11RetroServerKeywordPage, { generateMetadata } from './gunzodus-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus11RetroServerKeywordPage />;
}
