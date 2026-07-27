import WithDiscordHarmoniaOtRulesKeywordPage, { generateMetadata } from './with-discord-harmonia-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordHarmoniaOtRulesKeywordPage />;
}
