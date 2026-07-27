import Gunzodus12RetroServerKeywordPage, { generateMetadata } from './gunzodus-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus12RetroServerKeywordPage />;
}
