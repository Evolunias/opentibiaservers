import Gunzodus13WithDiscordServerKeywordPage, { generateMetadata } from './gunzodus-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus13WithDiscordServerKeywordPage />;
}
