import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot-rules');
}

export default function WithDiscordNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot-rules" />;
}
