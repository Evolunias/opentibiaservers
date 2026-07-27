import WithDiscordNoxiousotRulesKeywordPage, { generateMetadata } from './with-discord-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNoxiousotRulesKeywordPage />;
}
