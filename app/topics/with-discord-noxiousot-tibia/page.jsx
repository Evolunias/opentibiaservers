import WithDiscordNoxiousotTibiaKeywordPage, { generateMetadata } from './with-discord-noxiousot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNoxiousotTibiaKeywordPage />;
}
