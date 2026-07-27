import WithDiscordTibiantisTibiaKeywordPage, { generateMetadata } from './with-discord-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiantisTibiaKeywordPage />;
}
