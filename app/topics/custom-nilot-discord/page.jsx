import CustomNilotDiscordKeywordPage, { generateMetadata } from './custom-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotDiscordKeywordPage />;
}
