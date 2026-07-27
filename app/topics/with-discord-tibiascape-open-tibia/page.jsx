import WithDiscordTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './with-discord-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeOpenTibiaKeywordPage />;
}
