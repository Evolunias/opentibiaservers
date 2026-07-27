import Gunzodus14WithActivePlayersServerKeywordPage, { generateMetadata } from './gunzodus-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus14WithActivePlayersServerKeywordPage />;
}
