import WithDiscordOtmadnessTibiaKeywordPage, { generateMetadata } from './with-discord-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessTibiaKeywordPage />;
}
