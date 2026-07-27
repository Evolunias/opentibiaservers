import CustomOxygenotDiscordKeywordPage, { generateMetadata } from './custom-oxygenot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotDiscordKeywordPage />;
}
