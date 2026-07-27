import CustomTibiaraDiscordKeywordPage, { generateMetadata } from './custom-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraDiscordKeywordPage />;
}
