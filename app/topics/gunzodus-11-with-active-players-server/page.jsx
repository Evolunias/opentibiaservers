import Gunzodus11WithActivePlayersServerKeywordPage, { generateMetadata } from './gunzodus-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus11WithActivePlayersServerKeywordPage />;
}
