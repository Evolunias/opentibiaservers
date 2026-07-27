import WithDiscordGunzodusTibiaKeywordPage, { generateMetadata } from './with-discord-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusTibiaKeywordPage />;
}
