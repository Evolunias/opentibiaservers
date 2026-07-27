import WithDiscordNoxiousotOpenTibiaKeywordPage, { generateMetadata } from './with-discord-noxiousot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNoxiousotOpenTibiaKeywordPage />;
}
