import Gunzodus12WithActivePlayersServerKeywordPage, { generateMetadata } from './gunzodus-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus12WithActivePlayersServerKeywordPage />;
}
