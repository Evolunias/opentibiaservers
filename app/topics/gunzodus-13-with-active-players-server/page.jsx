import Gunzodus13WithActivePlayersServerKeywordPage, { generateMetadata } from './gunzodus-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus13WithActivePlayersServerKeywordPage />;
}
