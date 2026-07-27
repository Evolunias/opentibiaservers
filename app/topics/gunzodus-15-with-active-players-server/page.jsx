import Gunzodus15WithActivePlayersServerKeywordPage, { generateMetadata } from './gunzodus-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus15WithActivePlayersServerKeywordPage />;
}
