import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-rules');
}

export default function WithDiscordTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-rules" />;
}
