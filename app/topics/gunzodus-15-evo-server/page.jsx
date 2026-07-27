import Gunzodus15EvoServerKeywordPage, { generateMetadata } from './gunzodus-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus15EvoServerKeywordPage />;
}
