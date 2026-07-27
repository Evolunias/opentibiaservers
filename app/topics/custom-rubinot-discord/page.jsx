import CustomRubinotDiscordKeywordPage, { generateMetadata } from './custom-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotDiscordKeywordPage />;
}
