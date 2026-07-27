import Gunzodus12EvoServerKeywordPage, { generateMetadata } from './gunzodus-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus12EvoServerKeywordPage />;
}
