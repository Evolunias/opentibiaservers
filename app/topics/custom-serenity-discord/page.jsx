import CustomSerenityDiscordKeywordPage, { generateMetadata } from './custom-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityDiscordKeywordPage />;
}
