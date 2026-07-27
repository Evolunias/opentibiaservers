import Gunzodus11EvoServerKeywordPage, { generateMetadata } from './gunzodus-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus11EvoServerKeywordPage />;
}
